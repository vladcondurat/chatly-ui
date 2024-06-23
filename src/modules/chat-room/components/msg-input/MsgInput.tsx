import { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from '@app/hooks/store-hooks';
import alertService from '@app/services/alert-service';
import {
  postMessageAsyncAction,
  updateMessageAsyncAction,
} from '@app/store/actions/message-actions';
import IMessage from '@app/types/message/IMessage';
import { Paperclip, SendHorizonal, X } from 'lucide-react';

import {
  MIClosePreview,
  MIContainer,
  MIEditMessageLabel,
  MIEditMessageLabelWrapper,
  MIImage,
  MIImagePreview,
  MIImagePreviewContainer,
  MITextArea,
  MIWrapper,
} from './styles';

interface IMsgInputProps {
  roomId: string;
  messageToEdit: IMessage | null;
  setMessageToEdit: (message: IMessage | null) => void;
}

const MsgInput = ({ roomId, messageToEdit, setMessageToEdit }: IMsgInputProps) => {
  const dispatch = useAppDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImageFile, setIsImageFile] = useState<boolean>(true);

  const adjustTextAreaHeight = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  const submitMessage = async () => {
    if (textAreaRef.current) {
      const textValue = textAreaRef.current.value;
      if (textValue.trim() === '' && !selectedFile) {
        return;
      }

      const messageContent = new FormData();
      messageContent.append('textContent', textValue);

      if (selectedFile) {
        messageContent.append('attachedImage', selectedFile);
      }

      if (messageToEdit) {
        await dispatch(updateMessageAsyncAction({ messageContent, messageId: messageToEdit.id }));
      } else {
        await dispatch(postMessageAsyncAction({ messageContent, roomId }));
      }

      textAreaRef.current.value = '';
      adjustTextAreaHeight();
      setSelectedFile(null);
      setMessageToEdit(null);
    }
  };

  const handleOnSubmit = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      await submitMessage();
    }
  };

  const handleCloseEditMessage = () => {
    setMessageToEdit(null);
    if (textAreaRef.current) {
      textAreaRef.current.value = '';
    }
    adjustTextAreaHeight();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setIsImageFile(true);
      } else {
        alertService.errorAlert({ title: 'Only image files are allowed' });
        setSelectedFile(null);
        setIsImageFile(false);
      }
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setIsImageFile(true);
  };

  const handleInput = () => {
    adjustTextAreaHeight();
  };

  useEffect(() => {
    if (textAreaRef.current && messageToEdit) {
      textAreaRef.current.value = messageToEdit.content.textContent;
      textAreaRef.current.focus();
      adjustTextAreaHeight();
    } else {
      setSelectedFile(null);
      setIsImageFile(true);
    }
  }, [messageToEdit, setMessageToEdit]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [roomId]);

  return (
    <MIEditMessageLabelWrapper>
      {selectedFile && isImageFile && (
        <MIImagePreviewContainer>
          <MIImagePreview>
            <MIImage src={URL.createObjectURL(selectedFile)} alt="Preview" />
            <MIClosePreview onClick={handleRemoveImage}>
              <X size={20} strokeWidth={1.5} />
            </MIClosePreview>
          </MIImagePreview>
        </MIImagePreviewContainer>
      )}

      {messageToEdit && (
        <MIEditMessageLabel>
          <X size={20} strokeWidth={1.5} onClick={handleCloseEditMessage} />
          <div>Edit message mode</div>
        </MIEditMessageLabel>
      )}

      <MIContainer>
        <MIWrapper>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput">
            <Paperclip color="#8a8a8a" strokeWidth={1.5} />
          </label>
          <MITextArea
            ref={textAreaRef}
            placeholder="Aa"
            onKeyDown={handleOnSubmit}
            onInput={handleInput}
            rows={1}
          />
          <SendHorizonal color="#8a8a8a" strokeWidth={1.5} onClick={submitMessage} />
        </MIWrapper>
      </MIContainer>
    </MIEditMessageLabelWrapper>
  );
};

export default MsgInput;

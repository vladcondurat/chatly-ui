import { MIContainer, MIWrapper, MISvg, MITextArea } from './styles';
import AttachSvg from './assets/AttachSvg.svg';
import EmojiSvg from './assets/EmojiSvg.svg';
import { useRef } from 'react';
import IMessageContent from '../../../../types/message/IMessageContent';
import { useAppDispatch } from '../../../../hooks/store-hooks';
import { postMessageAsyncAction } from '../../../../store/actions/message-actions';

const MsgInput = ({ roomId }: { roomId: string }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const handleOnSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();

      const message: Partial<IMessageContent> = {
        textContent: e.currentTarget.value,
      };

      dispatch(postMessageAsyncAction({ messageContent: message, roomId: roomId }));

      e.currentTarget.value = '';
      adjustTextAreaHeight();

      //temporary solution to refresh the page after sending a message
      window.location.reload();
    }
  };

  const adjustTextAreaHeight = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  const handleInput = () => {
    adjustTextAreaHeight();
  };

  return (
    <MIContainer>
      <MIWrapper>
        <MISvg src={AttachSvg} />
        <MITextArea ref={textAreaRef} placeholder="Write a message..." onKeyDown={handleOnSubmit} onInput={handleInput} rows={1} />
        <MISvg src={EmojiSvg} />
      </MIWrapper>
    </MIContainer>
  );
};

export default MsgInput;

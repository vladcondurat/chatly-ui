import { useAppDispatch } from '@app/hooks/store-hooks';
import { deleteMessageAsyncAction } from '@app/store/actions/message-actions';
import IMessage from '@app/types/message/IMessage';
import formatTime from '@app/utils/formatTime';
import { Pen, Trash } from 'lucide-react';

import {
  SMContainer,
  SMContainerWithImg,
  SMContentWrapper,
  SMDefaultImgTextContainer,
  SMError,
  SMImgContainer,
  SMImgContainerWrapper,
  SMLoading,
  SMMsgTime,
  SMOptions,
  SMOptionsWrapper,
  SMTextContainer,
  SMTextWrapper,
  SMWrapper,
} from './styles';

interface ISentMsgProps {
  message: IMessage;
  isLoading?: boolean;
  isError?: boolean;
  onEditMessage?: (message: IMessage) => void;
}

const SentMsg = ({ message, isLoading, isError, onEditMessage }: ISentMsgProps) => {
  const dispatch = useAppDispatch();

  if (message === null) {
    return null;
  }

  const { content, createdAt } = message;

  const handleDelete = async () => {
    await dispatch(deleteMessageAsyncAction(message.id));
  };

  const handleUpdate = () => {
    if (onEditMessage) {
      onEditMessage(message);
    }
  };

  return (
    <SMWrapper>
      <SMTextWrapper>
        <SMOptionsWrapper className="options-wrapper">
          <SMOptions onClick={handleUpdate}>
            <Pen size={20} strokeWidth={1.5} />
          </SMOptions>
          <SMOptions onClick={handleDelete}>
            <Trash size={20} strokeWidth={1.5} />
          </SMOptions>
        </SMOptionsWrapper>
        {isLoading && <SMLoading>Loading...</SMLoading>}
        {isError && <SMError>Failed</SMError>}

        {content.attachedImageUrl && (
          <SMContentWrapper>
            <SMImgContainerWrapper>
              <SMImgContainer src={content.attachedImageUrl} alt="attached" />
            </SMImgContainerWrapper>
            <SMContainerWithImg>
              {content.textContent ? (
                <SMTextContainer>{content.textContent}</SMTextContainer>
              ) : (
                <SMDefaultImgTextContainer>Attached Image</SMDefaultImgTextContainer>
              )}
              <SMMsgTime>{isLoading ? 'now' : formatTime(createdAt)}</SMMsgTime>
            </SMContainerWithImg>
          </SMContentWrapper>
        )}

        {content.textContent && !content.attachedImageUrl && (
          <SMContainer>
            <SMTextContainer>{content.textContent}</SMTextContainer>
            <SMMsgTime>{isLoading ? 'now' : formatTime(createdAt)}</SMMsgTime>
          </SMContainer>
        )}
      </SMTextWrapper>
    </SMWrapper>
  );
};

export default SentMsg;

import IMessage from '../../../../types/message/IMessage';
import formatTime from '../../../../utils/formatTime';
import { SMContainer, SMError, SMLoading, SMMsgTime, SMTextContainer, SMTextWrapper, SMWrapper, SMOptionsWrapper, SMOptions } from './styles';

interface IReceivedMsgProps {
  message: IMessage;
  isLoading?: boolean;
  isError?: boolean;
}

const SentMsg = ({ message, isLoading, isError }: IReceivedMsgProps) => {
  const { content, createdAt } = message;

  const handleDelete = () => {
    console.log('Delete message');
  };

  const handleUpdate = () => {
    console.log('Update message');
  };

  return (
    <SMWrapper>
      <SMTextWrapper>
        <SMOptionsWrapper className="options-wrapper">
          <SMOptions onClick={handleUpdate}>✏️</SMOptions>
          <SMOptions onClick={handleDelete}>🗑️</SMOptions>
        </SMOptionsWrapper>
        {isLoading && <SMLoading>Loading...</SMLoading>}
        {isError && <SMError>Failed</SMError>}
        <SMContainer>
          <SMTextContainer>{content.textContent}</SMTextContainer>
          <SMMsgTime>{isLoading ? 'now' : formatTime(createdAt)}</SMMsgTime>
        </SMContainer>
      </SMTextWrapper>
    </SMWrapper>
  );
};

export default SentMsg;

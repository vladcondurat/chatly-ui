import IMessage from '../../../../types/message/IMessage';
import formatTime from '../../../../utils/formatTime';
import { SMContainer, SMError, SMLoading, SMMsgTime, SMTextContainer, SMTextWrapper, SMWrapper } from './styles';

interface IReceivedMsgProps {
  message: IMessage;
  isLoading?: boolean;
  isError?: boolean;
}

const SentMsg = ({ message, isLoading, isError }: IReceivedMsgProps) => {
  const { content, createdAt } = message;

  return (
    <SMWrapper>
      <SMTextWrapper>
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

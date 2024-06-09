import IMessage from '../../../../types/message/IMessage';
import formatTime from '../../../../utils/formatTime';
import { SMContainer, SMMsgTime, SMTextContainer, SMWrapper } from './styles';

const SentMsg = ({ props }: { props: IMessage }) => {
  const { content, createdAt } = props;

  return (
    <SMWrapper>
      <SMContainer>
        <SMTextContainer>{content.textContent}</SMTextContainer>
        <SMMsgTime>{formatTime(createdAt)}</SMMsgTime>
      </SMContainer>
    </SMWrapper>
  );
};

export default SentMsg;

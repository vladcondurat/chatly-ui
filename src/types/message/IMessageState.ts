import IMessage from './IMessage';

interface IMessageState {
  data: IMessage;
  loading: boolean;
  isError: boolean;
}

export default IMessageState;

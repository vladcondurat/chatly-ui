import { MIContainer, MIField, MISvg, MIWrapper } from './styles';
import AttachSvg from './assets/AttachSvg.svg';
import EmojiSvg from './assets/EmojiSvg.svg';

const MsgInput = () => {
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  return (
    <MIContainer>
      <MIWrapper>
        <MISvg src={AttachSvg} />
        <MIField role="textbox" contentEditable onPaste={handlePaste} />
        <MISvg src={EmojiSvg} />
      </MIWrapper>
    </MIContainer>
  );
};

export default MsgInput;

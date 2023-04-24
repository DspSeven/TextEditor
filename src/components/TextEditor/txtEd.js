import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  TextEditorContainer,
  HorizontalLine,
  TextArea,
  Button,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderLine: false,
  }

  activeBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  activeItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  activeUnderLine = () => {
    this.setState(prevState => ({
      isUnderLine: !prevState.isUnderLine,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state
    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    const underLineColor = isUnderLine ? '#faff00' : '#f1f5f9'
    return (
      <TextEditorContainer>
        <h1>Text Editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <div>
          <ul>
            <li>
              <Button
                type="button"
                data-testid="bold"
                onClick={this.activeBold}
                color={boldColor}
              >
                <VscBold size={25} />
              </Button>
            </li>
            <li>
              <Button
                type="button"
                data-testid="italic"
                onClick={this.activeItalic}
                color={italicColor}
              >
                <GoItalic size={25} />
              </Button>
            </li>
            <li>
              <Button
                type="button"
                data-testid="underline"
                onClick={this.activeUnderLine}
                color={underLineColor}
              >
                <AiOutlineUnderline size={25} />
              </Button>
            </li>
          </ul>
          <HorizontalLine />
          <TextArea
            isBold={isBold}
            isItalic={isItalic}
            isUnderLine={isUnderLine}
          />
        </div>
      </TextEditorContainer>
    )
  }
}
export default TextEditor

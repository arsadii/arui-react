import { Editor } from "@tiptap/react";
import React from "react";
import Styles from "../RichTextEditor.module.scss";
import cn from "classnames";

interface EditorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  editor: Editor;
  activeKey: string;
}

const EditorMenuBtn: React.FC<EditorButtonProps> = ({
  editor,
  activeKey,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={() => editor.chain().focus().toggleBold().run()}
      disabled={!editor.can().chain().focus().toggleBold().run()}
      className={cn(Styles["modifier-btn"], {
        [Styles["active"]]: editor.isActive(activeKey),
      })}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default EditorMenuBtn;

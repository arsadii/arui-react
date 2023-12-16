import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Styles from "./RichTextEditor.module.scss";
import { MenuBar } from "./MenuBar";
import { useEffect } from "react";

type RichTextEditorProps = {
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  onChange,
  value,
  readOnly = false,
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();

      onChange && onChange(content);
    },
    editable: !readOnly,
  });

  useEffect(() => {
    editor?.setEditable(!readOnly);
  }, [readOnly]);

  return (
    <>
      {!readOnly && <MenuBar editable={!readOnly} editor={editor} />}
      <EditorContent
        contentEditable={!readOnly}
        className={Styles["ProseMirror"]}
        editor={editor}
      />
    </>
  );
};

export default RichTextEditor;

import React from "react";
import cn from "classnames";
import { Editor } from "@tiptap/core";
import {
  ArrowClockwise,
  ArrowCounterClockwise,
  ArrowUDownLeft,
  ArrowsOutLineVertical,
  CodeSimple,
  FileCode,
  ListBullets,
  ListNumbers,
  Quotes,
  TextAa,
  TextBolder,
  TextHFive,
  TextHFour,
  TextHOne,
  TextHSix,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextStrikethrough,
  TextT,
} from "phosphor-react";
import Styles from "./RichTextEditor.module.scss";

interface MenuBarProps {
  editor: Editor | null;
  editable?: boolean;
}

export const MenuBar: React.FC<MenuBarProps> = ({
  editor,
  editable = true,
}) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={Styles["menu-bar"]}>
      <button
        title="Bold"
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editable || !editor.can().chain().focus().toggleBold().run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("bold"),
        })}
      >
        <TextBolder weight="bold" />
      </button>
      <button
        title="Italic"
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editable || !editor.can().chain().focus().toggleItalic().run()
        }
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("italic"),
        })}
      >
        <TextItalic weight="bold" />
      </button>
      <button
        title="Strike"
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editable || !editor.can().chain().focus().toggleStrike().run()
        }
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("strike"),
        })}
      >
        <TextStrikethrough weight="bold" />
      </button>
      <button
        title="Code"
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editable || !editor.can().chain().focus().toggleCode().run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("code"),
        })}
      >
        <CodeSimple weight="bold" />
      </button>
      <button
        title="Reset"
        type="button"
        disabled={!editable}
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={Styles["modifier-btn"]}
      >
        <TextAa weight="bold" />
      </button>
      <button
        title="Paragraf"
        type="button"
        disabled={!editable}
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("paragraph"),
        })}
      >
        <TextT weight="bold" />
      </button>
      <button
        title="Heading 1"
        type="button"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("heading", { level: 1 }),
        })}
      >
        <TextHOne weight="bold" />
      </button>
      <button
        title="Heading 2"
        type="button"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("heading", { level: 2 }),
        })}
      >
        <TextHTwo weight="bold" />
      </button>
      <button
        title="Heading 3"
        type="button"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("heading", { level: 3 }),
        })}
      >
        <TextHThree weight="bold" />
      </button>
      <button
        title="Heading 4"
        type="button"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("heading", { level: 4 }),
        })}
      >
        <TextHFour weight="bold" />
      </button>
      <button
        title="Heading 5"
        type="button"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("heading", { level: 5 }),
        })}
      >
        <TextHFive weight="bold" />
      </button>
      <button
        title="Heading 6"
        type="button"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("heading", { level: 6 }),
        })}
      >
        <TextHSix weight="bold" />
      </button>
      <button
        type="button"
        title="Bullet List"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("bulletList"),
        })}
      >
        <ListBullets weight="bold" />
      </button>
      <button
        type="button"
        title="Number List"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("orderedList"),
        })}
      >
        <ListNumbers weight="bold" />
      </button>
      <button
        type="button"
        title="Block Code"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("codeBlock"),
        })}
      >
        <FileCode weight="bold" />
      </button>
      <button
        type="button"
        title="Block Quote"
        disabled={!editable}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={cn(Styles["modifier-btn"], {
          [Styles["active"]]: editor.isActive("blockquote"),
        })}
      >
        <Quotes weight="fill" />
      </button>
      <button
        type="button"
        title="Horizontal Rule"
        disabled={!editable}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={Styles["modifier-btn"]}
      >
        <ArrowsOutLineVertical weight="fill" />
      </button>
      <button
        type="button"
        title="Hard Break"
        disabled={!editable}
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={Styles["modifier-btn"]}
      >
        <ArrowUDownLeft weight="fill" />
      </button>
      <button
        title="Undo"
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editable || !editor.can().chain().focus().undo().run()}
        className={Styles["modifier-btn"]}
      >
        <ArrowCounterClockwise weight="fill" />
      </button>
      <button
        title="Redo"
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editable || !editor.can().chain().focus().redo().run()}
        className={Styles["modifier-btn"]}
      >
        <ArrowClockwise weight="fill" />
      </button>
    </div>
  );
};

import React from "react";
import styles from "./button.module.css";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Button({
  children,
  bgColor,
  btnColor,
  margin,
  display,
}) {
  return (
    <>
      <button
        className={styles.button}
        style={{
          backgroundColor: bgColor,
          margin: margin,
          color: btnColor,
          display: display,
        }}
      >
        {children}
      </button>
    </>
  );
}

export function IconCheckboxes({ checked, watchListHandler }) {
  return (
    <div>
      <Checkbox
        {...label}
        onChange={watchListHandler}
        checked={checked}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}

import { IPiecePosition } from "@/src/interfaces/chessboard";
import { useEffect, useRef } from "react";
import styles from "./DisplayScreen.module.css";
import ReactDOM from "react-dom/client";

interface IProps {
  standing: IPiecePosition[];
}

export const DisplayScreen__Chessboard = (props: IProps) => {
  const { standing } = props;

  useEffect(() => {
    standing.forEach((piece) => {
      const squareElement = document.getElementById(piece.position);
      const testPiece = document.getElementById(piece.piece);
      if (squareElement == null) {
        return;
      }
      if (testPiece == null) {
        return;
      }
      if (squareElement.hasChildNodes() === false) {
        squareElement.appendChild(testPiece.cloneNode(true));
      }
    });
  }, [standing]);

  return (
    <div className={styles.chessboardContainer}>
      <div className={styles.boardPiecesPlaceholder}>
        <span id="white-rook" className={styles.whiteChessPiece}>
          ♜
        </span>
        <span id="white-knight" className={styles.whiteChessPiece}>
          ♞
        </span>
        <span id="white-bishop" className={styles.whiteChessPiece}>
          ♝
        </span>
        <span id="white-queen" className={styles.whiteChessPiece}>
          ♛
        </span>
        <span id="white-king" className={styles.whiteChessPiece}>
          ♚
        </span>
        <span id="white-pawn" className={styles.whiteChessPiece}>
          ♟︎
        </span>
        <span id="black-rook" className={styles.blackChessPiece}>
          ♜
        </span>
        <span id="black-knight" className={styles.blackChessPiece}>
          ♞
        </span>
        <span id="black-bishop" className={styles.blackChessPiece}>
          ♝
        </span>
        <span id="black-queen" className={styles.blackChessPiece}>
          ♛
        </span>
        <span id="black-king" className={styles.blackChessPiece}>
          ♚
        </span>
        <span id="black-pawn" className={styles.blackChessPiece}>
          ♟︎
        </span>
      </div>
      <div className={styles.chessboard}>
        <div id="a8" className={styles.whiteSquare}></div>
        <div id="b8" className={styles.blackSquare}></div>
        <div id="c8" className={styles.whiteSquare}></div>
        <div id="d8" className={styles.blackSquare}></div>
        <div id="e8" className={styles.whiteSquare}></div>
        <div id="f8" className={styles.blackSquare}></div>
        <div id="g8" className={styles.whiteSquare}></div>
        <div id="h8" className={styles.blackSquare}></div>

        <div id="a7" className={styles.blackSquare}></div>
        <div id="b7" className={styles.whiteSquare}></div>
        <div id="c7" className={styles.blackSquare}></div>
        <div id="d7" className={styles.whiteSquare}></div>
        <div id="e7" className={styles.blackSquare}></div>
        <div id="f7" className={styles.whiteSquare}></div>
        <div id="g7" className={styles.blackSquare}></div>
        <div id="h7" className={styles.whiteSquare}></div>

        <div id="a6" className={styles.whiteSquare}></div>
        <div id="b6" className={styles.blackSquare}></div>
        <div id="c6" className={styles.whiteSquare}></div>
        <div id="d6" className={styles.blackSquare}></div>
        <div id="e6" className={styles.whiteSquare}></div>
        <div id="f6" className={styles.blackSquare}></div>
        <div id="g6" className={styles.whiteSquare}></div>
        <div id="h6" className={styles.blackSquare}></div>

        <div id="a5" className={styles.blackSquare}></div>
        <div id="b5" className={styles.whiteSquare}></div>
        <div id="c5" className={styles.blackSquare}></div>
        <div id="d5" className={styles.whiteSquare}></div>
        <div id="e5" className={styles.blackSquare}></div>
        <div id="f5" className={styles.whiteSquare}></div>
        <div id="g5" className={styles.blackSquare}></div>
        <div id="h5" className={styles.whiteSquare}></div>

        <div id="a4" className={styles.whiteSquare}></div>
        <div id="b4" className={styles.blackSquare}></div>
        <div id="c4" className={styles.whiteSquare}></div>
        <div id="d4" className={styles.blackSquare}></div>
        <div id="e4" className={styles.whiteSquare}></div>
        <div id="f4" className={styles.blackSquare}></div>
        <div id="g4" className={styles.whiteSquare}></div>
        <div id="h4" className={styles.blackSquare}></div>

        <div id="a3" className={styles.blackSquare}></div>
        <div id="b3" className={styles.whiteSquare}></div>
        <div id="c3" className={styles.blackSquare}></div>
        <div id="d3" className={styles.whiteSquare}></div>
        <div id="e3" className={styles.blackSquare}></div>
        <div id="f3" className={styles.whiteSquare}></div>
        <div id="g3" className={styles.blackSquare}></div>
        <div id="h3" className={styles.whiteSquare}></div>

        <div id="a2" className={styles.whiteSquare}></div>
        <div id="b2" className={styles.blackSquare}></div>
        <div id="c2" className={styles.whiteSquare}></div>
        <div id="d2" className={styles.blackSquare}></div>
        <div id="e2" className={styles.whiteSquare}></div>
        <div id="f2" className={styles.blackSquare}></div>
        <div id="g2" className={styles.whiteSquare}></div>
        <div id="h2" className={styles.blackSquare}></div>

        <div id="a1" className={styles.blackSquare}></div>
        <div id="b1" className={styles.whiteSquare}></div>
        <div id="c1" className={styles.blackSquare}></div>
        <div id="d1" className={styles.whiteSquare}></div>
        <div id="e1" className={styles.blackSquare}></div>
        <div id="f1" className={styles.whiteSquare}></div>
        <div id="g1" className={styles.blackSquare}></div>
        <div id="h1" className={styles.whiteSquare}></div>
      </div>
    </div>
  );
};

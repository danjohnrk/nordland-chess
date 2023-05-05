import { IPiecePosition } from "@/src/interfaces/chessboard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Chessboard.module.css";
import { useRouter } from "next/router";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

interface IProps {
  standing: IPiecePosition[];
}
export const Chessboard = (props: IProps) => {
  const { standing } = props;
  const [movingPiece, setMovingPiece] = useState<EventTarget | null>(null);
  const [currentStanding, setCurrentStanding] =
    useState<IPiecePosition[]>(standing);
  const router = useRouter();

  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);

  const storeCurrentStanding = () => {
    console.log(currentStanding);
    fetch(
      `/api/chessboard/edit?json=${JSON.stringify({
        standing: currentStanding,
      })}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoadingSpinner(true);
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  useEffect(() => {
    const pieceCount = {
      "white-rook": 0,
      "white-knight": 0,
      "white-bishop": 0,
      "white-pawn": 0,
      "black-rook": 0,
      "black-knight": 0,
      "black-bishop": 0,
      "black-pawn": 0,
    };

    standing.forEach((piece) => {
      if (piece.piece === "white-rook") {
        pieceCount["white-rook"] += 1;
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(
          `${piece.piece}-${pieceCount["white-rook"]}`
        );
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      } else if (piece.piece === "white-knight") {
        pieceCount["white-knight"] += 1;
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(
          `${piece.piece}-${pieceCount["white-knight"]}`
        );
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      } else if (piece.piece === "white-bishop") {
        pieceCount["white-bishop"] += 1;
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(
          `${piece.piece}-${pieceCount["white-bishop"]}`
        );
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      } else if (piece.piece === "white-pawn") {
        pieceCount["white-pawn"] += 1;
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(
          `${piece.piece}-${pieceCount["white-pawn"]}`
        );
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      } else if (piece.piece === "black-rook") {
        pieceCount["black-rook"] += 1;
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(
          `${piece.piece}-${pieceCount["black-rook"]}`
        );
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      } else if (piece.piece === "black-knight") {
        pieceCount["black-knight"] += 1;
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(
          `${piece.piece}-${pieceCount["black-knight"]}`
        );
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      } else if (piece.piece === "black-bishop") {
        pieceCount["black-bishop"] += 1;
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(
          `${piece.piece}-${pieceCount["black-bishop"]}`
        );
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      } else if (piece.piece === "black-pawn") {
        pieceCount["black-pawn"] += 1;
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(
          `${piece.piece}-${pieceCount["black-pawn"]}`
        );
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      } else {
        const squareElement = document.getElementById(piece.position);
        const pieceElement = document.getElementById(piece.piece);
        if (squareElement == null || pieceElement == null) {
          return;
        }
        squareElement.appendChild(pieceElement);
      }
    });
  }, [standing]);

  if (loadingSpinner === true) {
    return (
      <div className={styles.spinnerContainer}>
        <h2>Lagrer stilling</h2>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={styles.chessboardContainer}>
      <button
        className={styles.storeStandingButton}
        onClick={storeCurrentStanding}
      >
        Lagre
      </button>
      <div
        className={styles.blackBox}
        id="black-box"
        onDragOver={(event) => {
          allowDrop(event);
        }}
        onDrop={(event) => {
          setMovingPiece(null);
          drop({
            ev: event,
            movingPiece: movingPiece,
            standing: currentStanding,
            uppdateStanding: setCurrentStanding,
          });
        }}
      >
        <span
          id="black-rook-1"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♜
        </span>
        <span
          id="black-knight-1"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♞
        </span>
        <span
          id="black-bishop-1"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♝
        </span>
        <span
          id="black-queen"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♛
        </span>
        <span
          id="black-king"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♚
        </span>
        <span
          id="black-bishop-2"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♝
        </span>
        <span
          id="black-knight-2"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♞
        </span>
        <span
          id="black-rook-2"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♜
        </span>
        <span
          id="black-pawn-1"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="black-pawn-2"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="black-pawn-3"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="black-pawn-4"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="black-pawn-5"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="black-pawn-6"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="black-pawn-7"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="black-pawn-8"
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
      </div>
      <div className={styles.chessboard}>
        <div
          id="a8"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="b8"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="c8"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="d8"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="e8"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="f8"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="g8"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="h8"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>

        <div
          id="a7"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="b7"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="c7"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="d7"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="e7"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="f7"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="g7"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="h7"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>

        <div
          id="a6"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="b6"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="c6"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="d6"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="e6"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="f6"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="g6"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="h6"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>

        <div
          id="a5"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="b5"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="c5"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="d5"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="e5"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="f5"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="g5"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="h5"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>

        <div
          id="a4"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="b4"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="c4"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="d4"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="e4"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="f4"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="g4"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="h4"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>

        <div
          id="a3"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="b3"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="c3"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="d3"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="e3"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="f3"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="g3"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="h3"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>

        <div
          id="a2"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="b2"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="c2"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="d2"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="e2"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="f2"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="g2"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="h2"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>

        <div
          id="a1"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="b1"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="c1"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="d1"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="e1"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="f1"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="g1"
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
        <div
          id="h1"
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({
              ev: event,
              movingPiece: movingPiece,
              standing: currentStanding,
              uppdateStanding: setCurrentStanding,
            });
          }}
        ></div>
      </div>
      <div
        className={styles.whiteBox}
        id="white-box"
        onDragOver={(event) => {
          allowDrop(event);
        }}
        onDrop={(event) => {
          setMovingPiece(null);
          drop({
            ev: event,
            movingPiece: movingPiece,
            standing: currentStanding,
            uppdateStanding: setCurrentStanding,
          });
        }}
      >
        <span
          id="white-rook-1"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♜
        </span>
        <span
          id="white-knight-1"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♞
        </span>
        <span
          id="white-bishop-1"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♝
        </span>
        <span
          id="white-queen"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♛
        </span>
        <span
          id="white-king"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♚
        </span>
        <span
          id="white-bishop-2"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♝
        </span>
        <span
          id="white-knight-2"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♞
        </span>
        <span
          id="white-rook-2"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♜
        </span>
        <span
          id="white-pawn-1"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="white-pawn-2"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="white-pawn-3"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="white-pawn-4"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="white-pawn-5"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="white-pawn-6"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="white-pawn-7"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          id="white-pawn-8"
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
      </div>
    </div>
  );
};

function allowDrop(ev: any) {
  ev.preventDefault();
}

function drop({
  ev,
  movingPiece,
  standing,
  uppdateStanding,
}: {
  ev: any;
  movingPiece: any;
  standing: IPiecePosition[];
  uppdateStanding: Dispatch<SetStateAction<IPiecePosition[]>>;
}) {
  let indexToUpdate = null;
  if (ev.target.id === "black-box" || ev.target.id === "white-box") {
    standing.forEach((piece, index) => {
      if (movingPiece.parentElement.id === piece.position) {
        standing.splice(index, 1);
        uppdateStanding(standing);
      }
    });
  } else {
    standing.forEach((piece, index) => {
      if (movingPiece.parentElement.id === piece.position) {
        indexToUpdate = index;
      }
    });
  }

  if (
    ev.target.hasChildNodes() &&
    ev.target.id != "black-box" &&
    ev.target.id != "white-box"
  ) {
    return;
  }
  ev.preventDefault();
  ev.target.appendChild(movingPiece);

  if (indexToUpdate != null) {
    standing[indexToUpdate].position = movingPiece.parentElement.id;
    uppdateStanding(standing);
  }
  if (
    indexToUpdate === null &&
    ev.target.id != "black-box" &&
    ev.target.id != "white-box"
  ) {
    let pieceToAdd = movingPiece.id;
    if (
      pieceToAdd !== "black-queen" &&
      pieceToAdd !== "black-king" &&
      pieceToAdd !== "white-queen" &&
      pieceToAdd !== "white-king"
    ) {
      pieceToAdd = pieceToAdd.slice(0, -2);
    }
    standing.push({
      piece: pieceToAdd,
      position: movingPiece.parentElement.id,
    });
    uppdateStanding(standing);
  }
}

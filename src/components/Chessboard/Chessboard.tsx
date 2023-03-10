import { useState } from "react";
import styles from "./Chessboard.module.css";

export const Chessboard = () => {
  const [movingPiece, setMovingPiece] = useState<EventTarget | null>(null);
  return (
    <div className={styles.chessboardContainer}>
      <div
        className={styles.blackBox}
        onDragOver={(event) => {
          allowDrop(event);
        }}
        onDrop={(event) => {
          setMovingPiece(null);
          drop({ ev: event, movingPiece: movingPiece });
        }}
      >
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♜
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♞
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♝
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♛
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♚
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♝
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♞
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♜
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
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
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>

        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>

        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>

        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>

        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>

        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>

        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>

        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.blackSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
        <div
          className={styles.whiteSquare}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDrop={(event) => {
            setMovingPiece(null);
            drop({ ev: event, movingPiece: movingPiece });
          }}
        ></div>
      </div>
      <div
        className={styles.whiteBox}
        onDragOver={(event) => {
          allowDrop(event);
        }}
        onDrop={(event) => {
          setMovingPiece(null);
          drop({ ev: event, movingPiece: movingPiece });
        }}
      >
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♜
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♞
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♝
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♛
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♚
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♝
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♞
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♜
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
          }}
        >
          ♟︎
        </span>
        <span
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

function drop({ ev, movingPiece }: { ev: any; movingPiece: any }) {
  if (ev.target.hasChildNodes()) {
    return;
  }
  ev.preventDefault();
  ev.target.appendChild(movingPiece);
}

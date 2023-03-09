import { useState } from "react";
import styles from "./Chessboard.module.css";

export const Chessboard = () => {
  const [movingPiece, setMovingPiece] = useState<EventTarget | null>(null);
  return (
    <div className={styles.chessboardContainer}>
      <div className={styles.blackBox}>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♜
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♞
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♝
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♛
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♚
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♝
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♞
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♜
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.blackChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
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
      <div className={styles.whiteBox}>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♜
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♞
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♝
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♛
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♚
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♝
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♞
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♜
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
        <span
          className={styles.whiteChessPiece}
          draggable={true}
          onDragStart={(event) => {
            setMovingPiece(event.target);
            drag(event);
          }}
        >
          ♟︎
        </span>
      </div>
    </div>
  );
};

const test = () => {
  return <div>HELLOE</div>;
};

function allowDrop(ev: any) {
  ev.preventDefault();
}

function drag(ev: any) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop({ ev, movingPiece }: { ev: any; movingPiece: any }) {
  if (ev.target.hasChildNodes()) {
    return;
  }
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(ev.target);
  console.log(movingPiece);
  ev.target.appendChild(movingPiece);
}

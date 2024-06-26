// import { Fragment } from "react";

import { ReactNode } from "react";

// function Card() {
//   // const width = {
//   //   width: "350px",
//   // };

//   return (
//     <div
//       className="card"
//       style={{
//         //aqui hemos puesto la const width
//         width: "350px",
//       }}
//     >
//       <div className="card-body">Hola Mundo</div>
//     </div>
//   );
// }

// export function CardBody() {
//   return (
//     <Fragment>
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">
//         Some quick example text to build on the card title and make up the bulk
//         of the card's content.
//       </p>
//       <a href="#" className="btn btn-primary">
//         Go somewhere
//       </a>
//     </Fragment>
//   );
// }
// export default Card;

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props; //usamos CHILDREN porque es una propiedad especial para cuandso estamos pasando las propiedades
  // const width = {
  //   width: "350px",
  // };

  return (
    <div
      className="card"
      style={{
        //aqui hemos puesto la const width
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}
export default Card;

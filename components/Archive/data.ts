export type Data = {
  heading: string[];
  para: string;
  imgVarient: "normal" | "long" | "square";
  position: "normal" | "absolute" | "absolute-right" | "absolute-top";
};

export const data: Data[] = [
  {
    heading: [
      "Client: Coca Cola",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "normal",
    position: "normal",
  },
  {
    heading: [
      "Client: Lorem ipsum",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "long",
    position: "normal",
  },
  {
    heading: [
      "Client: Zelasit Ksale",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "normal",
    position: "absolute",
  },
  {
    heading: [
      "Client: Neuro Ka",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "square",
    position: "absolute-right",
  },
  {
    heading: [
      "Client: Radmweo",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "long",

    position: "absolute-top",
  },
  {
    heading: [
      "Client: Soekie Osk",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "square",
    position: "normal",
  },
];

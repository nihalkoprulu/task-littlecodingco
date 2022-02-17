import "./LoadMore.scss";

export const LoadMore = (props) => (
  <button className="LoadMore" type="button" {...props}>
    {props.children}
  </button>
);

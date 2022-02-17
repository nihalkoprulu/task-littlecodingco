import "./SearchButton.scss";

export const SearchButton = (props) => (
  <button className="SearchButton" type="button" {...props}>
    {props.children}
  </button>
);

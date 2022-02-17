import { SearchInput } from "../../atoms/searchInput/SearchInput";
import { SearchButton } from "../../atoms/searchButton/SearchButton";

import "./SearchBar.scss";

export const SearchBar = ({ onSearch }) => {
  return (
    <div className="SearchBar">
      <SearchInput
        placeholder="Search user"
        onChange={(e) => onSearch(e.target.value)}
      />
      <SearchButton>
        <i className="fa-solid fa-magnifying-glass"></i>
      </SearchButton>
    </div>
  );
};

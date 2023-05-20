import React from "react";
import { FiSearch, FiSend, FiX } from "react-icons/fi";

const SearchForm = (props: SearchFormProps) => {
  const { onSubmit, disabled, setKeywordSearch, keyword, onClear } = props;
  return (
    <>
      <div className="relative">
        <FiSearch size={24} color="#787878" className="absolute top-3 left-3" />
        <input
          data-cy="keyword"
          name="keyword"
          type="text"
          placeholder="Enter Username"
          className="input input-bordered w-full px-12"
          disabled={disabled}
          onChange={setKeywordSearch}
          value={keyword}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSubmit(event);
            }
          }}
        />
        {keyword && (
          <button data-cy="reset-btn" onClick={onClear}>
            <FiX size={24} color="#787878" className="absolute top-3 right-3" />
          </button>
        )}
      </div>
      <button
        data-cy="search-btn"
        className={`btn btn-primary gap-2 mt-4 w-full ${
          disabled ? "loading" : ""
        }`}
        disabled={disabled || !keyword}
        onClick={onSubmit}
      >
        Search <FiSend />
      </button>
    </>
  );
};

export default SearchForm;

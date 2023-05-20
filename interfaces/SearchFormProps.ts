interface SearchFormProps {
  onSubmit: (e: any) => void;
  setKeywordSearch: (e: any) => void;
  onClear: (e: any) => void;
  disabled: boolean;
  keyword: string;
}

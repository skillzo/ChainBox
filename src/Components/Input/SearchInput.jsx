import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = ({ onChange, placeholder, value, ...props }) => {
  return (
    <div className="relative cursor-pointer bg-[#F7F7F7] flex items-center border text-[#919191] focus-within:border focus-within:border-u-purple-300 w-full md:max-w-[300px] ">
      <input
        className="outline-0  w-full pl-2 py-2 truncate text-black text-sm bg-[#F7F7F7]"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      <AiOutlineSearch
        className="absolute right-0 mr-4 pointer-events-none"
        size={20}
      />
    </div>
  );
};

export default SearchInput;

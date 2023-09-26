import { Body, StyledInput, StyledSearchIcon } from "./SearchInput.styled";
import { Input } from "@mui/base";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    w: PropTypes.string
};


function SearchInput(props) {
    return (
        <Body w={props.w}>
            <Input slots={{ root: 'aside', input: StyledInput }} placeholder={props.placeholder}/>
            <IconButton><StyledSearchIcon/></IconButton>
        </Body>
    );
}

export default SearchInput;
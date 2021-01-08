import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/Search.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterList } from "../redux/selectors";

const Search = (props) => {
    const [text, setText] = React.useState("");

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { changeSearch, users } = props;
        changeSearch(event.target.value, users);
    };

    return (
        <div className="searchContainer">
            <form>
                <TextField
                    className="searchContainer__textField"
                    id="standard-start-adornment"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Search here"
                    onChange={onChangeSearch}
                />
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { users: state.users };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ changeSearch: filterList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);

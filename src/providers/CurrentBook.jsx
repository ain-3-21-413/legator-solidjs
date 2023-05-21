import { createContext, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentBookContext = createContext()

export default function CurrentBookProvider(props) {

    const [store, setStore] = createStore({
        books: [], 
    });

    const [currentBook, setCurrentBook] = createStore({
        fields: {
            "100-a": "", 
        }
    });

    const [newBook, setNewBook] = createStore({
        fields: {
            "100-a": "", 
        }
    })

    const [signals, setSignals] = createSignal({});
    const [fieldsValidation, setFieldsValidation] = createStore({
        "000-00": true, 
        "001-00": true, 
        "ind1-100": true, 
        "ind2-100": true, 
        "100-a": true, 
        "ind1-245": true, 
        "ind2-245": true, 
        "245-a": true, 
    });

    const validateInput = (name, value) => {
        if (["000-00", "001-00", "ind1-100", "ind2-100", "100-a", "ind1-245", "ind2-245", "245-a"].includes(name)) {
            setFieldsValidation(name, value.trim() == "");
        }
    }
    
    const areFieldsValid = () => {
        return (
            fieldsValidation["000-00"] ||
            fieldsValidation["001-00"] ||
            fieldsValidation["ind1-100"] ||
            fieldsValidation["ind2-100"] ||
            fieldsValidation["100-a"] ||
            fieldsValidation["ind1-245"] ||
            fieldsValidation["ind2-245"] ||
            fieldsValidation["245-a"]
        )
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        
        validateInput(name, value);
        setNewBook("fields", name, value);

        setSignals((prevSignals) => ({
            ...prevSignals, 
            [name]: value, 
        }));
    }

    const handleSave = () => {
        console.log(signals());
    }

    const selectBook = (book) => {
        setFieldsValidation("000-00", false);
        setFieldsValidation("001-00", false);
        setFieldsValidation("ind1-100", false);
        setFieldsValidation("ind2-100", false);
        setFieldsValidation("100-a", false);
        setFieldsValidation("ind1-245", false);
        setFieldsValidation("ind2-245", false);
        setFieldsValidation("245-a", false);
        setNewBook(book);
    }

    const fetchBooks = () => {
        const books = [
            {
                fields: {
                    "000-00": "fixed length control field",
                    "001-00": "control field",
                    "003-00": "control field",
                    "005-00": "control field",
                    "006-00": "fixed length control field",
                    "007-00": "fixed length control field",
                    "008-00": "fixed length control field",
                    "010-a": "1",
                    "015-2": "Source",
                    "015-a": "National bibliography number",
                    "015-q": "Qualifying information",
                    "100-a": "Personal name",
                    "100-d": "Dates associated with a name",
                    "100-e": "Relator term",
                    "100-q": "Fuller form of name",
                    "210-2": "Source",
                    "210-a": "Abbreviated title",
                    "245-a": "Title 1",
                    "246-a": "",
                    "246-b": "",
                    "246-h": " ",
                    "246-i": " ",
                    "ind1-010": "1",
                    "ind1-015": "1",
                    "ind1-100": "1",
                    "ind1-210": "1",
                    "ind1-245": "1",
                    "ind1-246": " ",
                    "ind2-010": "1",
                    "ind2-015": "1",
                    "ind2-100": "1",
                    "ind2-210": "1",
                    "ind2-245": "1",
                }, 
                items: [], 
            }, {
                fields: {
                    "000-00": "fixed length control field",
                    "001-00": "control field",
                    "003-00": "control field",
                    "005-00": "control field",
                    "006-00": "fixed length control field",
                    "007-00": "fixed length control field",
                    "008-00": "fixed length control field",
                    "010-a": "2",
                    "015-2": "Source",
                    "015-a": "National bibliography number",
                    "015-q": "Qualifying information",
                    "100-a": "Personal name",
                    "100-d": "Dates associated with a name",
                    "100-e": "Relator term",
                    "100-q": "Fuller form of name",
                    "210-2": "Source",
                    "210-a": "Abbreviated title",
                    "245-a": "Title 2",
                    "246-a": "",
                    "246-b": "",
                    "246-h": " ",
                    "246-i": " ",
                    "ind1-010": "1",
                    "ind1-015": "1",
                    "ind1-100": "1",
                    "ind1-210": "1",
                    "ind1-245": "1",
                    "ind1-246": " ",
                    "ind2-010": "1",
                    "ind2-015": "1",
                    "ind2-100": "1",
                    "ind2-210": "1",
                    "ind2-245": "1",
                }, 
                items: [], 
            }, {
                fields: {
                    "000-00": "fixed length control field",
                    "001-00": "control field",
                    "003-00": "control field",
                    "005-00": "control field",
                    "006-00": "fixed length control field",
                    "007-00": "fixed length control field",
                    "008-00": "fixed length control field",
                    "010-a": "3",
                    "015-2": "Source",
                    "015-a": "National bibliography number",
                    "015-q": "Qualifying information",
                    "100-a": "Personal name",
                    "100-d": "Dates associated with a name",
                    "100-e": "Relator term",
                    "100-q": "Fuller form of name",
                    "210-2": "Source",
                    "210-a": "Abbreviated title",
                    "245-a": "Title 3",
                    "246-a": "",
                    "246-b": "",
                    "246-h": " ",
                    "246-i": " ",
                    "ind1-010": "1",
                    "ind1-015": "1",
                    "ind1-100": "1",
                    "ind1-210": "1",
                    "ind1-245": "1",
                    "ind1-246": " ",
                    "ind2-010": "1",
                    "ind2-015": "1",
                    "ind2-100": "1",
                    "ind2-210": "1",
                    "ind2-245": "1",
                }, 
                items: [], 
            }, {
                fields: {
                    "000-00": "fixed length control field",
                    "001-00": "control field",
                    "003-00": "control field",
                    "005-00": "control field",
                    "006-00": "fixed length control field",
                    "007-00": "fixed length control field",
                    "008-00": "fixed length control field",
                    "010-a": "4",
                    "015-2": "Source",
                    "015-a": "National bibliography number",
                    "015-q": "Qualifying information",
                    "100-a": "Personal name",
                    "100-d": "Dates associated with a name",
                    "100-e": "Relator term",
                    "100-q": "Fuller form of name",
                    "210-2": "Source",
                    "210-a": "Abbreviated title",
                    "245-a": "Title 4",
                    "246-a": "",
                    "246-b": "",
                    "246-h": " ",
                    "246-i": " ",
                    "ind1-010": "1",
                    "ind1-015": "1",
                    "ind1-100": "1",
                    "ind1-210": "1",
                    "ind1-245": "1",
                    "ind1-246": " ",
                    "ind2-010": "1",
                    "ind2-015": "1",
                    "ind2-100": "1",
                    "ind2-210": "1",
                    "ind2-245": "1",
                }, 
                items: [], 
            }
        ];
        setStore("books", books);
    }

    const currentBookState = {
        signals, 
        handleInput, 
        handleSave, 
        fieldsValidation, 
        areFieldsValid, 
        fetchBooks, 
        selectBook, 
        store, 
        currentBook, 
        newBook, 
    }

    return (
        <CurrentBookContext.Provider value={currentBookState}>
            {props.children}
        </CurrentBookContext.Provider>
    )
}
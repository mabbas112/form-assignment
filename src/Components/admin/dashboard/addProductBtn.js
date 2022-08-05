
const addProductBtnStyle = {
    padding: 10, border: "1px solid black", margin: 20, borderRadius: 15
}
const NewProductBtn = (props) => {
    return (
        <button style={addProductBtnStyle} onClick={props.onClick}>
            Add Product
        </button>
    )
}
export default NewProductBtn;
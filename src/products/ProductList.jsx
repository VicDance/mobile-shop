const { state, dispatch } = useStore()

const ProductList = () => {
    return (
        <div>
            <input
                placeholder="Buscar productos..."
                value={state.query}
                onChange={e => dispatch({ type: 'query/set', payload: e.target.value })}
                aria-label="Buscar"
            />
        </div>
    );
}

export default ProductList;
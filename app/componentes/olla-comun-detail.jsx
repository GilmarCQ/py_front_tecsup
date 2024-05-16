export const OllaComunDetail = ({item}) => {
    return (
        <>
            <div className="rounded w-1/8">
                <figure>
                    <img src="data:image/jpeg;base64,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"
                         alt={item.nombre}/>
                </figure>
                <div className="px-10 py-2 bg-white">
                    <h3 className="font-bold text-xl leading-tight">{item.nombre}</h3>
                    <p>{item.direccion}</p>
                </div>
            </div>
        </>
    )
}
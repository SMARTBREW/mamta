 function Accordion({items}) {
    const [open, setOpen] = useState<number | null>(null);

    return(
        <div>
            {items.map((it, i) => (
                <div key = {i} >
                    <button onClick = {() => setOpen(open === i ? null : i)}>
                        {it.title}

                    </button> 
                    {open === i && <p>{it.content}</p>}
                    </div>   
                            ))}
        </div>
    );
 }
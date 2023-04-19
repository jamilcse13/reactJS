const element = (
    <h1 className="heading" tableIndex={index}>
        <span className='text'>Hello {new Date().toLocaleDateStrin()}</span>
        <img src='' />
    </h1>
);


/*
element = {
    type: 'h1',
    props: {
        classname: 'heading',
        tableIndex: 0,
        children: [
        {
            type: 'span',
            props: {
            children: 'text'
            }
        },
        {
            type: 'img',
            props: {
            children: 'src'
            }
        }
        ]
    }
}
*/
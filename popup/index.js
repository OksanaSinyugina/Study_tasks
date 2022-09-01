const modal = $.modal({
    title: 'Popup window',
    closable: true,
    content: `
        <p>Hey.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '200px',
    footerButtons: [
        {text: 'OK', type: 'primary', handler() {
            console.log('Primary btn clicked')
            modal.close()
         }},
        {text: 'CANCEL', type: 'danger', handler() {
            console.log('Danger btn clicked')
            modal.close()
         }},
    ]
})

modal.open()
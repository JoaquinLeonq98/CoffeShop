// -------------------------------------------------------------------------------------------------------
// Helper para formatear la fecha
// -------------------------------------------------------------------------------------------------------
export function formatDate(dateStr: string) : string{    const date = new Date(dateStr)
    return new Intl.DateTimeFormat('es-Es',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}


// -------------------------------------------------------------------------------------------------------
// Helper para formatear el precio
// -------------------------------------------------------------------------------------------------------
export function formatAmount(amount: number) : string{
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

// -------------------------------------------------------------------------------------------------------
// Helper para formatear el error de null o empty string
// -------------------------------------------------------------------------------------------------------
export function nullEmptyString(arg: unknown) {
    return arg ?? ''
}
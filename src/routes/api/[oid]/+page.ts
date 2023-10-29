export function load({ params }: { params: { id: string } }): { id: string } {
    return {
        id: params.id
    }
}
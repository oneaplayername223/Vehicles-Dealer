export const getGuessIndexController = async(req, res) => {
try {
    const data = await getGuessIndexService()
    res.status(200).json(data)
    
} catch (error) {
    return res.status(500).json({message: error.message})
}
}
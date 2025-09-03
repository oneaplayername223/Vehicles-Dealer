import { getGuessIndexService, getGuessCarService, getDealerIndexService, getDealerService } from "../Services/guessServices.js";

export const getGuessIndexController = async(req, res) => {
try {
    const data = await getGuessIndexService()
    return res.status(200).json(data)
    
} catch (error) {
    return res.status(500).json(error)
}
}

export const getGuessCarController = async(req, res) => {
    try {
        const { id } = req.params
        const data = await getGuessCarService(id)
        const result = data[0]
        
        if (!result) {
            return res.status(404).json({ message: 'Vehiculo no encontrado' })
        }
        
        return res.json(data)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const getDealerIndexController = async(req, res) => {
    try {
        const data = await getDealerIndexService()
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getDealerController = async(req, res) => {
    try {
        const { id } = req.params

        const data = await getDealerService(id)
        const result = data[0]
        
        if (!result) {
            return res.status(404).json({ message: 'Dealer no encontrado' })
        }
        
        return res.json(data)
        
    } catch (error) {
        return console.log(error)
        
    }
}
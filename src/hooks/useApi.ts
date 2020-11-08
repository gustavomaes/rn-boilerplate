import { AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'

type useApiType = {
  loadOnMount?: boolean
  clearDataOnLoad?: boolean | null
  fetchFn: (props?: any) => Promise<AxiosResponse<any>>
}

const useApi = ({
  fetchFn,
  loadOnMount = false,
  clearDataOnLoad = false
}: useApiType) => {
  // Our data fetching state variables
  const [data, setData] = useState(undefined)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // A function to handle all the data fetching logic
  const loadData = async (event: any | undefined) => {
    setIsLoading(true)
    setError('')
    if (clearDataOnLoad === true) setData(undefined)

    try {
      const res = await fetchFn(event)
      console.log('fetchFn> ', fetchFn)
      console.log('res> ', res)
      setData(res.data)
      setIsLoading(false)
    } catch (e) {
      console.log('error> ', e)
      if (e.response.data) setError(e.response.data)
      else setError('Ocorreu um erro interno. Tente novamente')
      setIsLoading(false)
    }
  }

  // 'onMount'
  // maybe load the data if required
  useEffect(() => {
    if (loadOnMount && fetchFn !== null) loadData(undefined)
  }, [])

  // Return the state and the load function to the component
  return [data, isLoading, error, loadData]
}

export default useApi

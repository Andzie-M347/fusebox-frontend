import { useEffect } from 'react'

import { Layout } from '@/layouts'
import { Welcome } from '@/components/ui/welcome'
import { Panics } from '@/components/panics'
import { useDispatch } from 'react-redux'

import { fetchUser } from '@/redux/actions/userAction'

export const Dashboard = () => {
    // const [status, setStatus] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    return (
        <Layout>
            <Welcome />

            <Panics />
        </Layout>
    )
}

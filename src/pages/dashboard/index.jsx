import React from 'react'

import { Layout } from '@/layouts'
import { Welcome } from '@/components/ui/welcome'
import { Panics } from '@/components/panics'

export const Dashboard = () => {
    return (
        <Layout>
            <Welcome />
            <Panics />
        </Layout>
    )
}

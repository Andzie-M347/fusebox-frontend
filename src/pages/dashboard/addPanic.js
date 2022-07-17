import { AddPanicForm } from '@/components/forms/addPanicForm'
import { Container } from '@/components/ui/container'
import { Layout } from '@/layouts'
import React from 'react'

export const AddPanic = () => {
    return (
        <Layout>
            <Container>
                <h4> AddPanic</h4>

                <AddPanicForm />
            </Container>
        </Layout>
    )
}

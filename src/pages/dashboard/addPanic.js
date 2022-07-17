import { AddPanicForm } from '@/components/forms/addPanicForm'
import { Container } from '@/components/ui/container'
import { Layout } from '@/layouts'
import React from 'react'

export const AddPanic = () => {
    return (
        <Layout>
            <Container>
                <header className="page-header">
                    <h2> Add a new panic</h2>
                </header>

                <AddPanicForm />
            </Container>
        </Layout>
    )
}

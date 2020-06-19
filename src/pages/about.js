import React from 'react'
import Layout from '../components/layout';
import SEO from "../components/seo"

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="Home" />

            <div className="not__homepage__container">
                <h1>About</h1>

                <div className="p__container opac-bg rounded">
                    <p className="white">
                    Funk-27 was born from years of experience in high profile, household name clients.
                    Our developers have worked with an array of diverse, household names from
                    Sky to Reuters to leading names across the start-up & scale-up landscape.</p>
                    <br />
                    <p className="white">
                    We strive to ensure each project is an agile, communications-lead, engaging client experience.</p>
                </div>
            </div>
        </Layout>
    )
}


export default AboutPage;
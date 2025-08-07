import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const jobsAPI = useSelector((state) => {
    return state.job.jobIndicator
  })

  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?company="

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.companyName)
  //     if (response.ok) {
  //       const { data } = await response.json()
  //       setJobs(data)
  //     } else {
  //       alert("Error fetching results")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} jobsAPI={jobsAPI} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults

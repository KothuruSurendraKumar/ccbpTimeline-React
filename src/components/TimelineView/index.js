// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import CourseTimeLineCard from '../CourseTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimeLineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="main-bg">
      <h1 className="heading">
        MY JOURNEY OF
        <br />
        <span className="ccbp-heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimeLineView

import { Typography, Card, Row, Col, Tag } from 'antd';
import { useTheme } from '../contexts/ThemeContext';
import { projects } from '../data/projects';

const { Title, Paragraph } = Typography;

const Projects = () => {
  const { isHobbyMode } = useTheme();

  if (isHobbyMode) {
    const hobbyProjects = [
      {
        title: 'Gallery of Acrylic Works',
        category: 'Visual Art',
        description: 'A collection of my acrylic paintings exploring color, emotion, and texture',
        pieces: ['"Sunset Dreams" - vibrant oranges and pinks', '"Ocean Serenity" - cool blues and waves', '"Urban Garden" - nature meets cityscape'],
      },
      {
        title: 'Gaming Journey',
        category: 'Gaming',
        description: 'Adventures across multiple gaming worlds and genres',
        pieces: ['Stardew Valley farm completed with all relationships', 'Dota 2 competitive ranked journey', 'Horror game recommendations and playthroughs'],
      },
      {
        title: 'Poetry Collection',
        category: 'Writing',
        description: 'Original poems and poetic reflections on life, love, and discovery',
        pieces: ['Seasonal poetry series', 'Introspective pieces on growth', 'Playful and whimsical verses'],
      },
      {
        title: 'Drama & Story Reviews',
        category: 'Media',
        description: 'Thoughtful analysis and appreciation of dramas and films',
        pieces: ['K-drama recommendations', 'Character arc analysis', 'Storytelling techniques breakdown'],
      },
    ];

    return (
      <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2 }}>
            Creative Portfolio
          </Paragraph>
          <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 16 }}>
            My <span className="gradient-text">Creative Works</span>
          </Title>
          <Paragraph style={{ fontSize: 20, marginBottom: 64 }}>
            Celebrating creativity, passion, and the joy of exploration
          </Paragraph>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {hobbyProjects.map((project, idx) => (
              <Card key={idx} className="glass" hoverable style={{ borderRadius: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                  <div>
                    <Tag color="default" style={{ marginBottom: 16, backgroundColor: '#FFA5C9', color: 'white', border: 'none' }}>{project.category}</Tag>
                    <Title level={2} style={{ marginBottom: 8 }}>{project.title}</Title>
                    <Paragraph>{project.description}</Paragraph>
                  </div>
                </div>
                
                <div style={{ marginBottom: 32 }}>
                  <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>
                    Highlights
                  </Paragraph>
                  <ul style={{ paddingLeft: 20 }}>
                    {project.pieces.map((piece, i) => (
                      <li key={i} style={{ marginBottom: 8 }}>{piece}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2 }}>
          Research Portfolio
        </Paragraph>
        <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 16 }}>
          Selected <span className="gradient-text">Projects</span>
        </Title>
        <Paragraph style={{ fontSize: 20, marginBottom: 64 }}>
          Systems designed to strengthen thinking, not replace it
        </Paragraph>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((project, idx) => (
            <Card key={idx} className="glass" hoverable style={{ borderRadius: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                <div>
                  <Tag color="red" style={{ marginBottom: 16 }}>{project.role}</Tag>
                  <Title level={2} style={{ marginBottom: 8 }}>{project.title}</Title>
                  <Paragraph>{project.context}</Paragraph>
                </div>
                <Paragraph style={{ fontSize: 14 }}>{project.timeline}</Paragraph>
              </div>
              
              <Row gutter={[32, 32]} style={{ marginBottom: 32 }}>
                <Col xs={24} md={12}>
                  <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>
                    Research Problem
                  </Paragraph>
                  <Paragraph>{project.problem}</Paragraph>
                </Col>
                <Col xs={24} md={12}>
                  <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>
                    Solution
                  </Paragraph>
                  <Paragraph>{project.solution}</Paragraph>
                </Col>
              </Row>
              
              <div style={{ marginBottom: 32 }}>
                <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>
                  Research Approach
                </Paragraph>
                <ul style={{ paddingLeft: 20 }}>
                  {project.approach.map((item, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ marginBottom: 32 }}>
                <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>
                  Technologies
                </Paragraph>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.tech.map(tech => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
              
              <div>
                <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>
                  Impact & Findings
                </Paragraph>
                <Row gutter={[16, 16]}>
                  {project.impact.map((item, i) => (
                    <Col xs={24} md={12} key={i}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 24, color: '#9A0000' }}>✓</span>
                        <span>{item}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import { Typography, Row, Col, Card } from 'antd';
import { useTheme } from '../contexts/ThemeContext';

const { Title, Paragraph } = Typography;

const Skills = () => {
  const { isHobbyMode } = useTheme();

  if (isHobbyMode) {
    const hobbySkills = [
      { category: 'Visual Arts', items: ['Acrylic painting', 'Color theory', 'Composition & balance', 'Texture techniques'] },
      { category: 'Gaming', items: ['Strategic thinking', 'Story engagement', 'Competitive play', 'Exploration & discovery'] },
      { category: 'Literary Arts', items: ['Poetry appreciation', 'Drama analysis', 'Character study', 'Narrative dissection'] },
      { category: 'Music', items: ['Genre exploration', 'Emotional connection', 'Playlist curation', 'Music discovery'] },
      { category: 'Languages', items: ['Continuous learning', 'Cross-cultural curiosity', 'Expression in new languages', 'Linguistic nuance'] },
      { category: 'Personal Growth', items: ['Self-reflection', 'Creative exploration', 'Adventure seeking', 'Community building'] }
    ];

    return (
      <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2 }}>
            Fun & Talents
          </Paragraph>
          <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 64 }}>
            Creative <span className="gradient-text">Pursuits</span>
          </Title>
          
          <Row gutter={[24, 24]}>
            {hobbySkills.map(({ category, items }) => (
              <Col xs={24} md={8} key={category}>
                <Card className="glass" hoverable style={{ borderRadius: 16, height: '100%' }}>
                  <Title level={3} style={{ marginBottom: 24 }}>{category}</Title>
                  <ul style={{ paddingLeft: 20 }}>
                    {items.map(skill => (
                      <li key={skill} style={{ marginBottom: 12 }}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ marginTop: 128, paddingTop: 64, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 32 }}>
              Philosophy
            </Paragraph>
            <Card className="glass" style={{ borderRadius: 16, padding: 32 }}>
              <Paragraph style={{ fontSize: 20, lineHeight: 1.8, margin: 0 }}>
                I believe in embracing curiosity and exploring passions fully. Whether creating art, gaming, reading, or learning languages, 
                each hobby teaches me something new about myself and the world. I celebrate the joy of trying new things and the growth that comes from creative expression.
              </Paragraph>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const skills = [
    { category: 'Systems Design', items: ['Architecture thinking', 'Scalable systems', 'API design', 'Database modeling'] },
    { category: 'AI & ML', items: ['Human-centred AI', 'NLP systems', 'Prompt engineering', 'Model integration'] },
    { category: 'Research Methods', items: ['Design-based research', 'User studies', 'Evaluation frameworks', 'Literature synthesis'] },
    { category: 'Education Theory', items: ['Metacognition', 'Cognitive offloading', 'Scaffolding design', 'Learning sciences'] },
    { category: 'Development', items: ['React/TypeScript', 'Python', 'Node.js', 'PostgreSQL'] },
    { category: 'Academic Skills', items: ['Technical writing', 'Research communication', 'Interdisciplinary collaboration', 'Grant writing'] }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2 }}>
          Capabilities
        </Paragraph>
        <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 64 }}>
          Research & <span className="gradient-text">Technical Skills</span>
        </Title>
        
        <Row gutter={[24, 24]}>
          {skills.map(({ category, items }) => (
            <Col xs={24} md={8} key={category}>
              <Card className="glass" hoverable style={{ borderRadius: 16, height: '100%' }}>
                <Title level={3} style={{ marginBottom: 24 }}>{category}</Title>
                <ul style={{ paddingLeft: 20 }}>
                  {items.map(skill => (
                    <li key={skill} style={{ marginBottom: 12 }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: 128, paddingTop: 64, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 32 }}>
            Approach
          </Paragraph>
          <Card className="glass" style={{ borderRadius: 16, padding: 32 }}>
            <Paragraph style={{ fontSize: 20, lineHeight: 1.8, margin: 0 }}>
              I combine systems engineering discipline with education research rigor. 
              Every design decision is grounded in evidence. Every system is built to serve learning, not automation.
              I translate complex theory into practical, maintainable tools that researchers and educators can actually use.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;

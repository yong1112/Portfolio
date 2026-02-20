import { Typography, Card, Row, Col } from 'antd';
import { useTheme } from '../contexts/ThemeContext';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const { isHobbyMode } = useTheme();

  const links = [
    { label: 'Email', value: 'your.email@university.edu', href: 'mailto:your.email@university.edu', icon: '📧' },
    { label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername', icon: '💻' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com/in/yourprofile', icon: '🔗' },
    { label: 'Google Scholar', value: 'scholar.google.com/yourprofile', href: 'https://scholar.google.com/yourprofile', icon: '📚' },
  ];

  if (isHobbyMode) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#FFA5C9', textTransform: 'uppercase', letterSpacing: 2 }}>
            Connect
          </Paragraph>
          <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 16 }}>
            Let's <span className="gradient-text">Share Joy</span>
          </Title>
          <Paragraph style={{ fontSize: 20, marginBottom: 64 }}>
            Connect with me about art, gaming, poetry, dramas, or anything creative!
          </Paragraph>
          
          <Row gutter={[32, 32]} style={{ marginBottom: 64 }}>
            {links.map(link => (
              <Col xs={24} md={12} key={link.label}>
                <a href={link.href} target={link.label !== 'Email' ? '_blank' : undefined} rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}>
                  <Card hoverable className="glass" style={{ borderRadius: 16, height: '100%' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>{link.icon}</div>
                    <Title level={3} style={{ marginBottom: 8 }}>{link.label}</Title>
                    <Paragraph style={{ color: '#FFA5C9', margin: 0 }}>{link.value}</Paragraph>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
          
          <Card className="glass" style={{ borderRadius: 16, marginBottom: 64 }}>
            <Title level={3} style={{ marginBottom: 24 }}>Let's Connect About</Title>
            <ul style={{ paddingLeft: 20, fontSize: 18, lineHeight: 2 }}>
              <li>Art, painting, and creative projects</li>
              <li>Gaming recommendations and adventures</li>
              <li>Poetry, drama reviews, and storytelling</li>
              <li>Language learning journeys and tips</li>
              <li>Music discoveries and playlist curation</li>
            </ul>
          </Card>

          <Card className="glass" style={{ borderRadius: 16, padding: 32 }}>
            <Paragraph style={{ fontSize: 24, textAlign: 'center', lineHeight: 1.8, margin: 0 }}>
              "Let's celebrate creativity, share passions, and explore the beautiful world of art and imagination together!"
            </Paragraph>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 128, padding: '128px 32px 80px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Paragraph style={{ fontSize: 12, fontWeight: 600, color: '#9A0000', textTransform: 'uppercase', letterSpacing: 2 }}>
          Contact
        </Paragraph>
        <Title level={1} style={{ fontSize: 56, marginTop: 16, marginBottom: 16 }}>
          Let's <span className="gradient-text">Collaborate</span>
        </Title>
        <Paragraph style={{ fontSize: 20, marginBottom: 64 }}>
          Open to PhD opportunities, research collaborations, and academic positions
        </Paragraph>
        
        <Row gutter={[32, 32]} style={{ marginBottom: 64 }}>
          {links.map(link => (
            <Col xs={24} md={12} key={link.label}>
              <a href={link.href} target={link.label !== 'Email' ? '_blank' : undefined} rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}>
                <Card hoverable className="glass" style={{ borderRadius: 16, height: '100%' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{link.icon}</div>
                  <Title level={3} style={{ marginBottom: 8 }}>{link.label}</Title>
                  <Paragraph style={{ color: '#9A0000', margin: 0 }}>{link.value}</Paragraph>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
        
        <Card className="glass" style={{ borderRadius: 16, marginBottom: 64 }}>
          <Title level={3} style={{ marginBottom: 24 }}>I'm Looking For</Title>
          <ul style={{ paddingLeft: 20, fontSize: 18, lineHeight: 2 }}>
            <li>PhD positions in HCI, Learning Sciences, or Educational Technology</li>
            <li>Research Assistant roles in human-centred AI or education research</li>
            <li>Teaching Assistant opportunities in CS or Education programs</li>
            <li>Collaborations on design-based research projects</li>
          </ul>
        </Card>

        <Card className="glass" style={{ borderRadius: 16, padding: 32 }}>
          <Paragraph style={{ fontSize: 24, textAlign: 'center', lineHeight: 1.8, margin: 0 }}>
            "I build systems that serve learning, not automation. If you're working on human-centred AI in education, let's connect."
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Contact;

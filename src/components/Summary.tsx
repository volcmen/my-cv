import { Card, CardContent } from '@/components/ui/card';
import snarkdown from 'snarkdown';

import { CAREER_START_YEAR } from '@/config/career';
import { SUMMARY } from '@/config/summary';

export function Summary() {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

  // Replace placeholders
  const processedText = SUMMARY.text.replace('{{YEARS}}', yearsOfExperience.toString());

  // Parse markdown
  const htmlContent = snarkdown(processedText);

  return (
    <Card className="py-2 rounded-none rounded-r-sm border-0 border-l-4 border-primary bg-accent/40 shadow-none">
      <CardContent>
        {/* eslint-disable-next-line react/no-danger -- preact-markup strips whitespace around <strong> tags */}
        <p className="text-base leading-relaxed text-secondary-foreground" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </CardContent>
    </Card>
  );
}

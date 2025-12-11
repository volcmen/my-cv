import { Card, CardContent } from '@/components/ui/card';
import Markup from 'preact-markup';
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
    <Card className="py-2 rounded-none rounded-r-sm border-0 border-l-4 border-indigo-500 bg-slate-50 shadow-none">
      <CardContent>
        <p className="text-base leading-relaxed text-slate-800">
          <Markup markup={htmlContent} />
        </p>
      </CardContent>
    </Card>
  );
}

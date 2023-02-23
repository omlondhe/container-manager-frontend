import { useState } from "react";
import { CalculationTypes } from "../utils/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalculationDataContainer from "./CalculationDataContainer";

interface HistoryItemProps {
  expanded: string | boolean;
  handleExpansion: Function;
  responseData: CalculationTypes | undefined;
  index: number;
}

function HistoryItem({
  expanded,
  handleExpansion,
  responseData,
  index,
}: HistoryItemProps) {
  return (
    <Accordion
      expanded={expanded === `panel${index + 1}`}
      onChange={handleExpansion(`panel${index + 1}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index + 1}bh-content`}
        id={`panel${index + 1}bh-header`}
      >
        <Typography sx={{ width: `33%`, flexShrink: 0 }}>
          {`Calculation ${index + 1}`}
        </Typography>
        <Typography sx={{ color: `text.secondary` }}>
          {new Date(responseData?.timestamp!).toLocaleString()}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CalculationDataContainer responseData={responseData} />
      </AccordionDetails>
    </Accordion>
  );
}

export default HistoryItem;

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import FixedPlansPanel from '../../PlanSubsystem/FixedPlanPanel';
import PlanSetName from '../../PlanSubsystem/planSetName';
import CPGeneralModal from '../GeneralModal/generalModal';
import { GeneralFunction, GetPlanByIdModal } from '../generalModalElements';
import { useDispatch } from 'react-redux';
import { GetPlanById, GetPlannData, TakePlanName } from '../../../../Redux/PlanSlice';

function GetPlanBy() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(GetPlannData());


    }, [dispatch])

    return (
        <>
            <FixedPlansPanel />
            <div>
                <p style={{ display: "flex", flexDirection: "row", textAlign: 'center' }}>you can also
                    &nbsp;
                    <CPGeneralModal
                        type={'id'}
                        buttonV={'none'}
                        IconButtonV={'none'}
                        ElementTitle={' get plan by id '}
                        // ElementFontColor={"blue"}
                        modalElements={<GeneralFunction
                            formLabel={'plan id'}
                            placeholder={0}
                            type={'id'}
                        />}
                        modalTitle={'get plan by id'}
                    />
                    &nbsp;
                    or
                    &nbsp;
                    <CPGeneralModal
                        type={'name'}
                        buttonV={'none'}
                        IconButtonV={'none'}
                        ElementTitle={' get plan by name '}
                        // ElementFontColor={"blue"}
                        modalElements={<GeneralFunction
                            formLabel={'plan name'}
                            placeholder={'plan'}
                            type={'name'}
                        />}
                        modalTitle={'get plan by id'}
                    />

                </p>
            </div>

        </>
    )
}

const steps = [
    {
        subject: 'introduction',
        selement: `A Create plan A Day Helps You Work, Rest and Play. create plan is very senstive in this field you must have good knowledge to use it`
    }
    ,
    {
        subject: 'Select Fixed Plan',
        selement: <GetPlanBy />
    }
    , {
        subject: 'Set Plan Name',
        selement: <PlanSetName />
    }


];

export default function CPSteps({ modalClosee }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const navigate = useNavigate();
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();

    };

    const interupt = () => {
        navigate('/system')
    }

    const handleReset = () => {
        // setActiveStep(0);
        // setCompleted({});
        { modalClosee() }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label.subject}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>start createing plan</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>






                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            {steps[activeStep].selement}
                        </Typography>









                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                onClick={interupt}
                                sx={{ mr: 1 }}
                            >
                                close
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                back
                            </Button>
                            {activeStep !== steps.length &&
                                (
                                    <Button onClick={handleComplete}>
                                        next
                                    </Button>
                                )}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}
import { test, expect } from '@playwright/test';
import Engagement_model from "../modules/EngagementModels/EngagementModel";

test.describe('Engagement Model page', async () => {
    Engagement_model();
})